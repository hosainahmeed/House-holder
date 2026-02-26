'use client'
import React, { useState, useCallback } from 'react';
import { Upload, Input, Select, Button, InputNumber, Checkbox, Radio, message } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { Building2, Home, Key, Lock } from 'lucide-react';
import type { RadioChangeEvent } from 'antd';

const { TextArea } = Input;

// Type definitions
type PropertyType = 'apartment' | 'home';
type ElevatorType = 'yes' | 'no';
type KeyHandoverType = 'in-person' | 'lockbox';

interface Task {
  id: number;
  text: string;
  checked: boolean;
}

interface FormData {
  title: string;
  images: any[];
  propertyType: PropertyType;
  floor: string;
  apartmentNumber: string;
  elevator: ElevatorType;
  propertySize: string;
  location: string;
  bedroom: number;
  bathroom: number;
  kitchen: number;
  keyHandoverType: KeyHandoverType;
  keyHandoverDetails: string;
  lockboxCode: string;
  keyboxLocation: string;
  vacuumProvided: boolean;
  suppliesProvided: boolean;
  description: string;
  generalTasks: Task[];
  bedroomTasks: Task[];
  bathroomTasks: Task[];
  kitchenTasks: Task[];
}

interface CustomTasks {
  general: string;
  bedroom: string;
  bathroom: string;
  kitchen: string;
}

// Separate TaskSection component with proper memoization
interface TaskSectionProps {
  title: string;
  category: keyof CustomTasks;
  tasks: Task[];
  customTaskValue: string;
  onAddTask: (category: keyof CustomTasks) => void;
  onDeleteTask: (category: keyof CustomTasks, taskId: number) => void;
  onToggleTask: (category: keyof CustomTasks, taskId: number) => void;
  onCustomTaskChange: (category: keyof CustomTasks, value: string) => void;
}

const TaskSection = React.memo(({
  title,
  category,
  tasks,
  customTaskValue,
  onAddTask,
  onDeleteTask,
  onToggleTask,
  onCustomTaskChange
}: TaskSectionProps) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAddTask(category);
    }
  };

  return (
    <div className="mb-6 border border-gray-200 p-4">
      <h3 className="font-medium text-gray-800 mb-3">{title}</h3>
      
      <div className="space-y-2 mb-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between group">
            <Checkbox
              checked={task.checked}
              onChange={() => onToggleTask(category, task.id)}
              className="flex-1"
            >
              <span className={task.checked ? 'text-gray-400 line-through' : 'text-gray-700'}>
                {task.text}
              </span>
            </Checkbox>
            <Button
              type="text"
              danger
              size="small"
              icon={<DeleteOutlined />}
              onClick={() => onDeleteTask(category, task.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Input
          placeholder="Text here"
          value={customTaskValue}
          onChange={(e) => onCustomTaskChange(category, e.target.value)}
          onPressEnter={handleKeyPress}
          allowClear
        />
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => onAddTask(category)}
        >
          Add
        </Button>
      </div>
    </div>
  );
});

TaskSection.displayName = 'TaskSection';

const PropertyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: 'Le Central',
    images: [],
    propertyType: 'apartment',
    floor: '3rd',
    apartmentNumber: '302',
    elevator: 'yes',
    propertySize: '50',
    location: 'France',
    bedroom: 1,
    bathroom: 1,
    kitchen: 2,
    keyHandoverType: 'in-person',
    keyHandoverDetails: '',
    lockboxCode: '',
    keyboxLocation: '',
    vacuumProvided: false,
    suppliesProvided: false,
    description: 'Mezzazine',
    generalTasks: [
      { id: 1, text: 'Take out the trash', checked: false },
      { id: 2, text: 'Air out the accommodation', checked: false },
      { id: 3, text: 'Check for odors (fresh accommodation)', checked: false }
    ],
    bedroomTasks: [
      { id: 1, text: 'Take out the trash', checked: false },
      { id: 2, text: 'Air out the accommodation', checked: false },
      { id: 3, text: 'Check for odors (fresh accommodation)', checked: false }
    ],
    bathroomTasks: [
      { id: 1, text: 'Take out the trash', checked: false },
      { id: 2, text: 'Air out the accommodation', checked: false },
      { id: 3, text: 'Check for odors (fresh accommodation)', checked: false }
    ],
    kitchenTasks: [
      { id: 1, text: 'Take out the trash', checked: false },
      { id: 2, text: 'Air out the accommodation', checked: false },
      { id: 3, text: 'Check for odors (fresh accommodation)', checked: false }
    ]
  });

  const [customTasks, setCustomTasks] = useState<CustomTasks>({
    general: '',
    bedroom: '',
    bathroom: '',
    kitchen: ''
  });

  const handleInputChange = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (info: any) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} uploaded successfully`);
    }
  };

  // Use useCallback to prevent recreation of these functions on every render
  const addCustomTask = useCallback((category: keyof CustomTasks) => {
    const taskText = customTasks[category].trim();
    if (!taskText) {
      message.warning('Please enter a task');
      return;
    }

    const taskField = `${category}Tasks` as keyof FormData;
    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      checked: false
    };

    setFormData(prev => ({
      ...prev,
      [taskField]: [...(prev[taskField] as Task[]), newTask]
    }));

    setCustomTasks(prev => ({ ...prev, [category]: '' }));
    message.success('Task added successfully');
  }, [customTasks]);

  const deleteTask = useCallback((category: keyof CustomTasks, taskId: number) => {
    const taskField = `${category}Tasks` as keyof FormData;
    setFormData(prev => ({
      ...prev,
      [taskField]: (prev[taskField] as Task[]).filter(task => task.id !== taskId)
    }));
    message.success('Task deleted');
  }, []);

  const toggleTask = useCallback((category: keyof CustomTasks, taskId: number) => {
    const taskField = `${category}Tasks` as keyof FormData;
    setFormData(prev => ({
      ...prev,
      [taskField]: (prev[taskField] as Task[]).map(task =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    }));
  }, []);

  const handleCustomTaskChange = useCallback((category: keyof CustomTasks, value: string) => {
    setCustomTasks(prev => ({ ...prev, [category]: value }));
  }, []);

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    message.success('Property created successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Properties</h1>

          {/* Property Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property title
            </label>
            <Input
              size="large"
              value={formData.title}
              onChange={(e) => handleInputChange('title', e.target.value)}
              className="w-full"
            />
          </div>

          {/* Property Image */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property image
            </label>
            <Upload
              listType="picture-card"
              onChange={handleImageUpload}
              beforeUpload={() => false}
              showUploadList={false}
              className="w-full"
            >
              <div className="flex flex-col items-center justify-center h-32 rounded-lg">
                <PlusOutlined className="text-2xl text-gray-400 mb-2" />
                <div className="text-gray-500">Add photos</div>
              </div>
            </Upload>
          </div>

          {/* Property Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Type
            </label>
            <Radio.Group
              value={formData.propertyType}
              onChange={(e: RadioChangeEvent) => handleInputChange('propertyType', e.target.value)}
              className="flex gap-4"
            >
              <Radio.Button value="apartment" className="flex-1 h-12 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Apartment</span>
                </div>
              </Radio.Button>
              <Radio.Button value="home" className="flex-1 h-12 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </div>
              </Radio.Button>
            </Radio.Group>
          </div>

          {/* Floor and Apartment Number */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Floor</label>
              <Select
                size="large"
                value={formData.floor}
                onChange={(value) => handleInputChange('floor', value)}
                className="w-full"
                options={[
                  { value: '1st', label: '1st' },
                  { value: '2nd', label: '2nd' },
                  { value: '3rd', label: '3rd' },
                  { value: '4th', label: '4th' },
                  { value: '5th', label: '5th' }
                ]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apartment Number
              </label>
              <Input
                size="large"
                value={formData.apartmentNumber}
                onChange={(e) => handleInputChange('apartmentNumber', e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Elevator */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Elevator</label>
            <Radio.Group
              value={formData.elevator}
              onChange={(e: RadioChangeEvent) => handleInputChange('elevator', e.target.value)}
              className="flex gap-4"
            >
              <Radio.Button value="yes" className="flex-1 h-12 flex items-center justify-center">
                Yes
              </Radio.Button>
              <Radio.Button value="no" className="flex-1 h-12 flex items-center justify-center">
                No
              </Radio.Button>
            </Radio.Group>
          </div>

          {/* Property size */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property size
            </label>
            <div className="flex items-center">
              <Input
                size="large"
                value={formData.propertySize}
                onChange={(e) => handleInputChange('propertySize', e.target.value)}
                className="w-full"
                suffix={<span className="text-gray-500">m²</span>}
              />
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <Select
              size="large"
              value={formData.location}
              onChange={(value) => handleInputChange('location', value)}
              className="w-full"
              options={[
                { value: 'France', label: 'France' },
                { value: 'Spain', label: 'Spain' },
                { value: 'Italy', label: 'Italy' },
                { value: 'Germany', label: 'Germany' }
              ]}
            />
          </div>

          {/* Room Counters */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bedroom</label>
              <div className="flex items-center gap-2">
                <Button 
                  type="default" 
                  size="large" 
                  onClick={() => handleInputChange('bedroom', Math.max(0, formData.bedroom - 1))}
                  className="flex-1"
                >
                  -
                </Button>
                <InputNumber
                  size="large"
                  min={0}
                  value={formData.bedroom}
                  onChange={(value) => handleInputChange('bedroom', value || 0)}
                  className="flex-1 text-center"
                  controls={false}
                />
                <Button 
                  type="default" 
                  size="large" 
                  onClick={() => handleInputChange('bedroom', formData.bedroom + 1)}
                  className="flex-1"
                >
                  +
                </Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bathroom</label>
              <div className="flex items-center gap-2">
                <Button 
                  type="default" 
                  size="large" 
                  onClick={() => handleInputChange('bathroom', Math.max(0, formData.bathroom - 1))}
                  className="flex-1"
                >
                  -
                </Button>
                <InputNumber
                  size="large"
                  min={0}
                  value={formData.bathroom}
                  onChange={(value) => handleInputChange('bathroom', value || 0)}
                  className="flex-1 text-center"
                  controls={false}
                />
                <Button 
                  type="default" 
                  size="large" 
                  onClick={() => handleInputChange('bathroom', formData.bathroom + 1)}
                  className="flex-1"
                >
                  +
                </Button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kitchen</label>
              <div className="flex items-center gap-2">
                <Button 
                  type="default" 
                  size="large" 
                  onClick={() => handleInputChange('kitchen', Math.max(0, formData.kitchen - 1))}
                  className="flex-1"
                >
                  -
                </Button>
                <InputNumber
                  size="large"
                  min={0}
                  value={formData.kitchen}
                  onChange={(value) => handleInputChange('kitchen', value || 0)}
                  className="flex-1 text-center"
                  controls={false}
                />
                <Button 
                  type="default" 
                  size="large" 
                  onClick={() => handleInputChange('kitchen', formData.kitchen + 1)}
                  className="flex-1"
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            {/* In-person key handover */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                <Key className="w-4 h-4" />
                In-person key handover
              </h3>
              <Input
                placeholder="Meet the cleaner to give keys"
                value={formData.keyHandoverDetails}
                onChange={(e) => handleInputChange('keyHandoverDetails', e.target.value)}
                className="w-full"
              />
            </div>

            {/* Lockbox */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Lock className="w-4 h-4" />
                <h3 className="font-medium text-gray-800">Lockbox</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <Checkbox
                  checked={formData.keyHandoverType === 'lockbox'}
                  onChange={(e) => handleInputChange('keyHandoverType', e.target.checked ? 'lockbox' : 'in-person')}
                  className="mb-3 text-gray-700"
                >
                  Lockbox Code Released 24 Hours Before Mission
                </Checkbox>
                
                {formData.keyHandoverType === 'lockbox' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Keybox Location
                      </label>
                      <Input
                        placeholder="e.g. B. Berlin or"
                        value={formData.keyboxLocation}
                        onChange={(e) => handleInputChange('keyboxLocation', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Lockbox Code
                      </label>
                      <Input
                        placeholder="Lockbox Code"
                        value={formData.lockboxCode}
                        onChange={(e) => handleInputChange('lockboxCode', e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 mb-6">
              <Checkbox
                checked={formData.vacuumProvided}
                onChange={(e) => handleInputChange('vacuumProvided', e.target.checked)}
                className="text-gray-700"
              >
                Vacuum Provided
              </Checkbox>
              <br />
              <Checkbox
                checked={formData.suppliesProvided}
                onChange={(e) => handleInputChange('suppliesProvided', e.target.checked)}
                className="text-gray-700"
              >
                Supplies Provided
              </Checkbox>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <TextArea
              rows={3}
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Message"
              className="w-full"
            />
          </div>

          {/* Task Sections */}
          <div className="space-y-8">
            <TaskSection
              title="General"
              category="general"
              tasks={formData.generalTasks}
              customTaskValue={customTasks.general}
              onAddTask={addCustomTask}
              onDeleteTask={deleteTask}
              onToggleTask={toggleTask}
              onCustomTaskChange={handleCustomTaskChange}
            />

            <TaskSection
              title="Bedroom(s)"
              category="bedroom"
              tasks={formData.bedroomTasks}
              customTaskValue={customTasks.bedroom}
              onAddTask={addCustomTask}
              onDeleteTask={deleteTask}
              onToggleTask={toggleTask}
              onCustomTaskChange={handleCustomTaskChange}
            />

            <TaskSection
              title="Bathroom / WC"
              category="bathroom"
              tasks={formData.bathroomTasks}
              customTaskValue={customTasks.bathroom}
              onAddTask={addCustomTask}
              onDeleteTask={deleteTask}
              onToggleTask={toggleTask}
              onCustomTaskChange={handleCustomTaskChange}
            />

            <TaskSection
              title="Kitchen / Kitchen Area"
              category="kitchen"
              tasks={formData.kitchenTasks}
              customTaskValue={customTasks.kitchen}
              onAddTask={addCustomTask}
              onDeleteTask={deleteTask}
              onToggleTask={toggleTask}
              onCustomTaskChange={handleCustomTaskChange}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="primary"
              size="large"
              block
              onClick={handleSubmit}
              className="h-12 text-lg font-medium bg-black hover:bg-gray-800"
            >
              Create Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
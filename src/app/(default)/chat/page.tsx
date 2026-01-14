'use client'

const Page = () => {
const chatList = [
    {
        id: 1,
        name: "John Doe",
        message: "Hello, how are you?",
        time: "10:30 AM",
        status: "online"
    }
]
    return (
      <div className="">
        {
          chatList?.map((item)=>(
            <div key={item.id} className="">
              
            </div>
          ))
        }
      </div>
    );
};

export default Page;
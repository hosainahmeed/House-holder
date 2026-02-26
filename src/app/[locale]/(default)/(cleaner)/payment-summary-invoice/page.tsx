'use client'
import jsPDF from 'jspdf'
import React, { useState } from 'react'
import { Download } from 'lucide-react'

// Dummy invoice data
const invoiceData = {
    cleaningId: 'CLN-20260105-789',
    propertyName: 'Cozy Apartment Marais',
    address: '45 Rue de Rivolio 75004 Paris France',
    cleaningDate: 'Monday, Jan 2026',
    duration: '2 Hours',
    timeSlot: '10:00 - 12:00',
    cleaner: 'Sophie Martin',
    propertyType: 'Studio / T1',
    surface: '0 - 30 m²',
    priceRange: '20 - 35 €',
}

const InvoicePage = () => {
    const [isGenerating, setIsGenerating] = useState(false)

    const handleDownloadPdf = () => {
        try {
            setIsGenerating(true);
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            // Set margins
            const margin = 20;
            let yPos = margin;

            // Set font styles
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(24);
            pdf.text('Cleaning Invoice', margin, yPos);

            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            yPos += 8;
            pdf.text(`Invoice ID: ${invoiceData.cleaningId}`, margin, yPos);

            yPos += 5;
            pdf.text(`Cleaner: ${invoiceData.cleaner}`, pdf.internal.pageSize.getWidth() - margin, yPos, { align: 'right' });

            yPos += 15;

            // Property Info Section
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.text('Property Information', margin, yPos);
            yPos += 8;

            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            pdf.text(`Property Name: ${invoiceData.propertyName}`, margin, yPos);
            yPos += 6;
            pdf.text(`Property Type: ${invoiceData.propertyType}`, margin + 100, yPos);
            yPos += 6;
            pdf.text(`Address: ${invoiceData.address}`, margin, yPos);

            yPos += 15;

            // Schedule Info Section
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.text('Schedule Information', margin, yPos);
            yPos += 8;

            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            pdf.text(`Cleaning Date: ${invoiceData.cleaningDate}`, margin, yPos);
            yPos += 6;
            pdf.text(`Time Slot: ${invoiceData.timeSlot}`, margin + 100, yPos);
            yPos += 6;
            pdf.text(`Estimated Duration: ${invoiceData.duration}`, margin, yPos);
            yPos += 6;
            pdf.text(`Surface: ${invoiceData.surface}`, margin + 100, yPos);

            yPos += 15;

            // Price Section
            pdf.setDrawColor(200, 200, 200);
            pdf.setFillColor(240, 240, 240);
            pdf.rect(margin, yPos, pdf.internal.pageSize.getWidth() - (2 * margin), 30, 'F');

            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.text('Price Details', margin + 5, yPos + 10);

            pdf.setFont('helvetica', 'normal');
            pdf.text('Cleaning Price:', margin + 5, yPos + 20);

            pdf.setFont('helvetica', 'bold');
            pdf.text(invoiceData.priceRange, pdf.internal.pageSize.getWidth() - margin - 5, yPos + 20, { align: 'right' });

            yPos += 40;

            // Footer
            pdf.setFont('helvetica', 'italic');
            pdf.setFontSize(8);
            pdf.setTextColor(128, 128, 128);
            const footerText = 'This invoice was generated automatically. No signature required.';
            const footerWidth = pdf.getTextWidth(footerText);
            const centerX = (pdf.internal.pageSize.getWidth() - footerWidth) / 2;
            pdf.text(footerText, centerX, yPos);

            // Save PDF
            const fileName = `Cleaning-Invoice-${invoiceData.cleaningId}.pdf`;
            pdf.save(fileName);

        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('Failed to generate PDF. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto max-w-3xl">
                {/* Download Button */}
                <div className="mb-4 flex justify-end">
                    <button
                        onClick={handleDownloadPdf}
                        disabled={isGenerating}
                        className="flex items-center gap-2 rounded-lg bg-[#2DBEFF] px-4 py-2 text-white hover:bg-[#1aa8e8] disabled:opacity-50 transition-colors"
                    >
                        <Download className="h-4 w-4" />
                        {isGenerating ? 'Generating PDF...' : 'Download PDF'}
                    </button>
                </div>

                {/* Preview of the invoice */}
                <div className="rounded-2xl bg-white p-8 shadow-lg">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Cleaning Invoice</h1>
                            <p className="text-sm text-gray-500">Invoice ID: {invoiceData.cleaningId}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-700">Cleaner</p>
                            <p className="text-gray-900">{invoiceData.cleaner}</p>
                        </div>
                    </div>

                    {/* Property Info */}
                    <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-400">Property Name</p>
                            <p className="font-medium">{invoiceData.propertyName}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Property Type</p>
                            <p className="font-medium">{invoiceData.propertyType}</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-gray-400">Address</p>
                            <p className="font-medium">{invoiceData.address}</p>
                        </div>
                    </div>

                    {/* Schedule Info */}
                    <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-400">Cleaning Date</p>
                            <p className="font-medium">{invoiceData.cleaningDate}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Time Slot</p>
                            <p className="font-medium">{invoiceData.timeSlot}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Estimated Duration</p>
                            <p className="font-medium">{invoiceData.duration}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">Surface</p>
                            <p className="font-medium">{invoiceData.surface}</p>
                        </div>
                    </div>

                    {/* Price Section */}
                    <div className="rounded-xl bg-gray-50 p-4">
                        <p className="mb-2 text-sm font-semibold text-gray-700">Price Details</p>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Cleaning Price</span>
                            <span className="font-semibold text-gray-900">{invoiceData.priceRange}</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 border-t pt-4 text-center text-xs text-gray-400">
                        This invoice was generated automatically. No signature required.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoicePage
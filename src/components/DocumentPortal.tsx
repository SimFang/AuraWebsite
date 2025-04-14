
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// This component can be used to create a standalone document portal if needed in the future
const DocumentPortal = () => {
  const downloadForm = () => {
    // In a real implementation, this would be a real document URL
    const FORM_DOCUMENT_URL = "https://example.com/website-requirements-form.pdf";
    
    const link = document.createElement('a');
    link.href = FORM_DOCUMENT_URL;
    link.download = "website-requirements-form.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 border rounded-lg bg-white">
      <h3 className="text-xl font-semibold mb-4">Download Website Requirements Form</h3>
      <p className="mb-4 text-gray-600">
        Please download our requirements form to provide all the necessary details for your website.
      </p>
      <Button onClick={downloadForm} className="flex items-center gap-2">
        <Download size={16} />
        Download Form
      </Button>
    </div>
  );
};

export default DocumentPortal;

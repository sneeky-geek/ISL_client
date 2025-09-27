// Test file to verify the text-to-sign API endpoint
// You can run this test by navigating to /test-api in your browser

export default function TestAPI() {
  const testAPI = async () => {
    try {
      const response = await fetch('/api/text-to-sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: 'Hello world' }),
      });

      const data = await response.json();
      console.log('API Response:', data);
      
      if (data.success) {
        alert(`Success! Converted text: "${data.convertedText}"`);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Test failed:', error);
      alert(`Test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">API Test Page</h1>
      <button 
        onClick={testAPI}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Test Text-to-Sign API
      </button>
      <div className="mt-4 text-sm text-gray-600">
        <p>Click the button to test the API with sample text "Hello world"</p>
        <p>Expected response: "cat sorry child"</p>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const ErrorPage = () => {

  const [content, setContent] = useState("");

  const handleSave = () => {
    console.log(content); // هنا سترسل المحتوى للباك
  };
  return (
    <div>
<Editor
        apiKey="lfa4suk0msgy0iea3b6pla5z85qflmoetofmrer80dhwsmmw" // ضع هنا الـ API Key
        value={content}
        onEditorChange={(newContent) => setContent(newContent)}
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount"
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | link image | code",
        }}
      />

    <button onClick={handleSave} style={{ marginTop: "10px" }}>
      حفظ المقال
    </button>
  </div>
  );
};

export default ErrorPage;

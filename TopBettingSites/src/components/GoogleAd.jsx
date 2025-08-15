import { useEffect, useRef } from "react";

export default function GoogleAd({ slot }) {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.hasAttribute("data-adsbygoogle-status")) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.log("خطأ في AdSense:", err);
      }
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7542281627623465"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

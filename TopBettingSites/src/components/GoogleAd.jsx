import { useEffect, useRef } from "react";

export default function GoogleAd({ slot, style }) {
  const adRef = useRef(null);

  useEffect(() => {
    const loadAd = () => {
      if (adRef.current && !adRef.current.hasAttribute("data-adsbygoogle-status")) {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.log("خطأ في AdSense:", err);
        }
      }
    };

    // تأخير التنفيذ حتى يتأكد أن العنصر ظاهر ولديه أبعاد
    const timeout = setTimeout(loadAd, 500);

    // تنظيف الـ timeout عند إزالة العنصر
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block", width: "100%", minHeight: "300px", ...style }}
      data-ad-client="ca-pub-7542281627623465"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

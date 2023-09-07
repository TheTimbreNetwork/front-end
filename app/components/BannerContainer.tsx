import { useBannerState } from "../../context/AllContext";
import { BannerWithButton } from "./BannerWithButton";

export function BannerContainer() {
  const [showBanner, setShowBanner] = useBannerState();

  return (
    <div>
      {showBanner ? <BannerWithButton closeBanner={setShowBanner} /> : null}
    </div>
  );
}

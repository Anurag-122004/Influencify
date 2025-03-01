"use client";
import AIAgentChat from "@/components/AIAgentChat";
import ThumbnailGeneration from "@/components/ThumbnailGeneration";
import TitleGeneration from "@/components/TitleGeneration";
import Transcriptions from "@/components/Transcriptions";
import Usage from "@/components/Usage";
import YoutubeVideoDetails from "@/components/YoutubeVideoDetails";
import { FeatureFlag } from "@/features/flag";
import { useParams } from "next/navigation";

function AnalysisPage() {
  const params = useParams<{ videoId: string }>();
  const { videoId } = params;
  return (
    <div className="xl:container mx-auto p-4 md:p-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* left side  */}
        <div className="order-2 lg:order-1 flex flex-col gap-4  bg-white lg:border-r border-gray-200 p-6"> 
            {/* analysis section */}
            <div>
                <Usage
                    featureFlag={FeatureFlag.ANALYSE_VIDEO}
                    title="Video Analysis"
                />

                {/* video transcription status  */}

            </div>

            {/* youtube video details  */}
            <YoutubeVideoDetails videoId={videoId} />

            {/* thumbnail gene */}
            <ThumbnailGeneration videoId={videoId} />

            {/* title gene */}
            <TitleGeneration videoId={videoId} />

            {/* transcription  */}
            <Transcriptions videoId={videoId} />
        </div>

        {/* right side  */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] md:h-[calc(100vh-6rem)]">
            {/* ai agent chat section */}
            <AIAgentChat videoId={videoId} />
        </div>
      </div>
    </div>
  );
}

export default AnalysisPage;

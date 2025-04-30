import EventCards from "@/components/others/EventCard";
import FootballFinals from "@/components/others/FootballFinals";
import ImageGallery from "@/components/others/ImageGallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F5EF]">
      <main className="max-w-7xl mx-auto p-10">
        <ImageGallery />
        <FootballFinals/>
      </main>
      <EventCards />
    </div>
  );
}

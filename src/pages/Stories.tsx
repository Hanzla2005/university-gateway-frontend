import { Link } from "react-router-dom";
import { topStories } from "@/data/stories";
import PageHeader from "@/components/PageHeader";

const Stories = () => {
  return (
    <div>
      <PageHeader title="Stories" />
      <div className="container-main my-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topStories.map((story) => (
            <Link key={story.id} to={`/stories/${story.id}`} className="group block relative aspect-[4/3] overflow-hidden bg-foreground">
              <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" loading="lazy" width={800} height={512} />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">{story.tag}</p>
                <p className="text-sm text-primary-foreground leading-snug">{story.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;

import { useParams } from "react-router-dom";
import { topStories } from "@/data/stories";
import PageHeader from "@/components/PageHeader";
import NotFound from "./NotFound";

const StoryDetail = () => {
  const { id } = useParams();
  const story = topStories.find((s) => s.id === Number(id));

  if (!story) {
    return <NotFound />;
  }

  return (
    <div>
      <PageHeader title={story.tag} />
      <div className="container-main my-10">
        <h1 className="text-3xl font-serif text-foreground mb-4">{story.title}</h1>
        <img src={story.image} alt={story.title} className="w-full max-w-4xl mx-auto aspect-video object-cover rounded-lg shadow-lg mb-8" />
        <div className="prose lg:prose-lg max-w-4xl mx-auto">
          <p>{story.content}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;

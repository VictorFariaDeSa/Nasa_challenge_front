import { TopicDetailPageContent } from "@/components/topic-detail-page";
import {
  getRelatedMentions,
  getTopicDetail,
  getRelatedArticles,
  getRelatedTopics,
} from "@/lib/services/index";

export default async function TopicDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const topicDetails = await getTopicDetail(id);
  const relatedArticles = await getRelatedArticles(id);
  const relatedTopics = await getRelatedTopics(id);
  const mentions = await getRelatedMentions(id);

  topicDetails.relatedArticles = relatedArticles;
  topicDetails.relatedTopics = relatedTopics;
  topicDetails.mentions = mentions;

  // Renderiza o Client Component e passa os dados para ele
  return <TopicDetailPageContent topicData={topicDetails} />;
}

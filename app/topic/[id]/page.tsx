import { TopicDetailPageContent } from "@/components/topic-detail-page";
import { getTopicDetail } from "@/lib/services/index";

export default async function TopicDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const topicDetails = await getTopicDetail(id);

  // Renderiza o Client Component e passa os dados para ele
  return <TopicDetailPageContent topicData={topicDetails} />;
}

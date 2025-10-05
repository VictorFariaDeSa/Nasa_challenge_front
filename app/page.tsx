import { getCategories, getTopics } from "@/lib/services";
import { DashboardContent } from "@/components/dashboard-content";

export default async function DashboardPage() {
  var categories = await getCategories();
  var topics = await getTopics();
  console.log("TOPICS: ", topics);
  // Renderiza o Client Component e passa os dados para ele

  return <DashboardContent categories={categories} topics={topics} />;
}

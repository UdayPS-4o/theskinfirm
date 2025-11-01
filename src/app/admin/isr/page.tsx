import { getPayload } from "payload";
import config from "@payload-config";
import RevalidationAdmin from "./RevalidationAdmin";

export default async function ISRAdminPage() {
  const payload = await getPayload({ config });
  const services = await payload.find({
    collection: "services",
    limit: 1000,
    select: {
      slug: true,
    },
  });

  const servicePages = services.docs.map((service) => `/${service.slug}`);
  const allPages = ["/services", ...servicePages];

  return <RevalidationAdmin pages={allPages} />;
}

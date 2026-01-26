import Link from "next/link";
import { getTemplateIds, getTemplate } from "@/templates";

export default function Home() {
  const templateIds = getTemplateIds();

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Template Platform
      </h1>
      <p style={{ marginBottom: "2rem", color: "#666" }}>
        Select a template to preview. Each template is fully isolated with its
        own styles, components, and API logic.
      </p>

      <div style={{ display: "grid", gap: "1rem" }}>
        {templateIds.map((id) => {
          const template = getTemplate(id);
          if (!template) return null;

          return (
            <Link
              key={id}
              href={`/${id}`}
              style={{
                display: "block",
                padding: "1.5rem",
                border: "1px solid #e2e8f0",
                borderRadius: "0.5rem",
                background: "#f8fafc",
                transition: "border-color 0.2s",
              }}
            >
              <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                {template.name}
              </h2>
              <p style={{ color: "#64748b", fontSize: "0.875rem" }}>
                {template.description}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}


import type { SpecTable as SpecTableType } from "@/data/products";

export function SpecTable({ table }: { table: SpecTableType }) {
  return (
    <section className="overflow-hidden rounded-lg border border-border bg-card">
      <h3 className="border-b border-border bg-muted px-4 py-3 text-base font-semibold text-foreground">
        {table.title}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          <tbody>
            {table.rows.map((row, index) => (
              <tr key={`${row.label}-${index}`} className="border-b border-border last:border-b-0">
                <th scope="row" className="w-2/5 bg-catalogue-panel px-4 py-3 font-medium text-foreground">
                  {row.label}
                </th>
                <td className="px-4 py-3 leading-6 text-muted-foreground">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

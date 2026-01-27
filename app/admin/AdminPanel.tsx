"use client";

import { useEffect, useState } from "react";

type ProductDraft = {
  productName: string;
  price: string;
  productImage: string; // url
};

type Product = ProductDraft & {
  id: string;
  createdAt: string;
  status: "draft" | "published";
  inventory: number;
  category: string;
};

function clsx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function formatMNT(input: string) {
  // simple display helper; backend can normalize later
  const s = input.trim();
  if (!s) return "";
  const normalized = s.replace(/[^\d.,₮\s]/g, "");
  return normalized.includes("₮") ? normalized : `${normalized}₮`;
}

export default function AdminPanel() {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<ProductDraft>({
    productName: "",
    price: "",
    productImage: "",
  });

  const [query, setQuery] = useState("");
  const previewImage = draft.productImage?.trim() || "preview.jpg";

  function resetDraft() {
    setDraft({ productName: "", price: "", productImage: "" });
  }

  const createProduct = async () => {
    setSaving(true);
    setError(null);

    try {
      const payload = {
        productName: draft.productName.trim(),
        price: draft.price.trim(),
        productImage: draft.productImage.trim(),
      };

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        setError(err?.message || `request failed (${res.status})`);
        return;
      }

      // optional: refresh list after create
      await getAllProducts();

      setOpen(false);
      resetDraft();
    } finally {
      setSaving(false);
    }
  };

  const getAllProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    if (res.ok) {
      setProducts(data);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/75 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 ">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="leading-tight">
                <div className="text-sm font-extrabold">Admin Panel</div>
                <div className="text-xs text-zinc-400">
                  products • inventory • drafts
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        {/* hero / stats */}
        <section className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-lg font-extrabold">Product Overview</div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Manage products, drafts, and quick edits.
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <StatCard label="Total products" value={1} />
                <StatCard label="Published" value={2} />
                <StatCard label="Drafts" value={3} />
              </div>
            </div>
          </div>
        </section>

        {/* filters */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm">
          <div className="flex gap-3 justify-between items-center">
            <div className="w-100">
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950 px-3 py-2">
                <span className="text-xs text-zinc-500">⌕</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name or category…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-600"
                />
              </div>
            </div>
            <div>
              <button
                onClick={() => setOpen(true)}
                className="w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 active:scale-[0.99]"
              >
                Add product
              </button>
            </div>
          </div>
        </section>

        {/* table / cards */}
        <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 p-4">
            <div>
              <div className="text-sm font-extrabold">Products</div>
              <div className="text-xs text-zinc-400">
                {products.length} shown
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="grid gap-2">
              {products.map((p) => (
                <ProductRow
                  key={p.id}
                  product={p}
                  onToggleStatus={() => {
                    setProducts((prev) =>
                      prev.map((x) =>
                        x.id === p.id
                          ? {
                              ...x,
                              status:
                                x.status === "draft" ? "published" : "draft",
                            }
                          : x,
                      ),
                    );
                  }}
                  onDelete={() =>
                    setProducts((prev) => prev.filter((x) => x.id !== p.id))
                  }
                />
              ))}

              {products.length === 0 ? (
                <div className="grid place-items-center rounded-2xl border border-dashed border-white/10 bg-zinc-950/40 px-4 py-10 text-center">
                  <div className="text-sm font-semibold">no results</div>
                  <div className="mt-1 text-xs text-zinc-400">
                    try a different query or reset filters.
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      {/* modal */}
      {open ? (
        <div className="fixed inset-0 z-50">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => {
              if (saving) return;
              setOpen(false);
              resetDraft();
              setError(null);
            }}
          />
          <div className="absolute inset-0 p-4 md:grid md:place-items-center">
            {/* panel */}
            <div
              className="
        w-full max-w-4xl
        rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl
        max-h-[calc(100dvh-2rem)] overflow-y-auto
        md:max-h-[calc(100vh-2rem)]
      "
              onClick={(e) => e.stopPropagation()} // important so inside scroll/clicks don't trigger overlay
            >
              <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl">
                {/* header */}
                <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
                  <div>
                    <div className="text-base font-extrabold tracking-tight">
                      Add product
                    </div>
                    <div className="mt-1 text-sm text-zinc-400">
                      fill in details, then save.
                    </div>
                  </div>

                  <button
                    disabled={saving}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 disabled:opacity-60"
                    onClick={() => {
                      setOpen(false);
                      resetDraft();
                      setError(null);
                    }}
                  >
                    Close
                  </button>
                </div>

                {/* content */}
                <div className="grid md:grid-cols-12">
                  {/* left: form */}
                  <div className="md:col-span-7">
                    <div className="p-5">
                      <div className="grid gap-4">
                        {error ? (
                          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                            {error}
                          </div>
                        ) : null}

                        <div>
                          <label className="text-xs font-semibold text-zinc-300">
                            Product Name
                          </label>
                          <input
                            value={draft.productName}
                            onChange={(e) =>
                              setDraft((d) => ({
                                ...d,
                                productName: e.target.value,
                              }))
                            }
                            placeholder="e.g. pink bouquet"
                            className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20 focus:bg-white/5"
                          />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="text-xs font-semibold text-zinc-300">
                              Price
                            </label>
                            <input
                              value={draft.price}
                              onChange={(e) =>
                                setDraft((d) => ({
                                  ...d,
                                  price: e.target.value,
                                }))
                              }
                              placeholder="e.g. 69420"
                              className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20 focus:bg-white/5"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-zinc-300">
                              image url
                            </label>
                            <input
                              value={draft.productImage}
                              onChange={(e) =>
                                setDraft((d) => ({
                                  ...d,
                                  productImage: e.target.value,
                                }))
                              }
                              placeholder="https://..."
                              className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm outline-none placeholder:text-zinc-600 focus:border-white/20 focus:bg-white/5"
                            />
                          </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold">
                                Publish Settings
                              </div>
                            </div>
                            <span className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200">
                              Default: Draft
                            </span>
                          </div>

                          <div className="mt-3 grid gap-2">
                            <Toggle
                              label="featured"
                              hint="promote on homepage"
                            />
                            <Toggle
                              label="visible"
                              hint="hide/show listing"
                              defaultOn
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* right: preview */}
                  <div className="border-t border-white/10 md:col-span-5 md:border-l md:border-t-0">
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold">preview</div>
                      </div>

                      <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={previewImage}
                            alt="preview"
                            className="h-full w-full object-cover opacity-90"
                            onError={(e) => {
                              (e.currentTarget as HTMLImageElement).src =
                                "preview.jpg";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3 right-3">
                            <div className="truncate text-sm font-semibold">
                              {draft.productName.trim() || "product name"}
                            </div>
                            <div className="mt-1 text-xs text-zinc-300">
                              {formatMNT(draft.price) || "price"}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div className="mt-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="text-sm font-semibold">checks</div>
                      <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                        <li>
                          • name:{" "}
                          <span className="text-zinc-200">
                            {draft.productName.trim() ? "ok" : "missing"}
                          </span>
                        </li>
                        <li>
                          • price:{" "}
                          <span className="text-zinc-200">
                            {draft.price.trim() ? "ok" : "missing"}
                          </span>
                        </li>
                        <li>
                          • image:{" "}
                          <span className="text-zinc-200">
                            {draft.productImage.trim()
                              ? "set"
                              : "default preview"}
                          </span>
                        </li>
                      </ul>
                    </div> */}
                    </div>
                  </div>
                </div>

                {/* footer */}
                <div className="sticky bottom-0 border-t border-white/10 bg-zinc-950/90 p-4 backdrop-blur">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      disabled={saving}
                      onClick={() => {
                        resetDraft();
                        setError(null);
                      }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm hover:bg-white/10 disabled:opacity-60"
                    >
                      reset
                    </button>

                    <div className="flex gap-2">
                      <button
                        disabled={saving}
                        onClick={() => {
                          setOpen(false);
                          resetDraft();
                          setError(null);
                        }}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm hover:bg-white/10 disabled:opacity-60"
                      >
                        cancel
                      </button>

                      <button
                        disabled={
                          saving ||
                          !draft.productName.trim() ||
                          !draft.price.trim()
                        }
                        onClick={createProduct}
                        className="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 disabled:opacity-60"
                      >
                        {saving ? "saving..." : "save draft"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}

function Badge({ status }: { status: "draft" | "published" }) {
  const isPub = status === "published";
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs",
        isPub
          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
          : "border-amber-400/20 bg-amber-400/10 text-amber-200",
      )}
    >
      <span
        className={clsx(
          "h-2 w-2 rounded-full",
          isPub ? "bg-emerald-400" : "bg-amber-400",
        )}
      />
      {status}
    </span>
  );
}

function ProductRow({
  product,
  onToggleStatus,
  onDelete,
}: {
  product: Product;
  onToggleStatus: () => void;
  onDelete: () => void;
}) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950/35 p-3">
      <div className="flex items-center gap-3">
        <div className="h-14 w-14 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.productImage}
            alt={product.productName}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold">
                {product.productName}
              </div>
              <div className="mt-0.5 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                <span>{product.category}</span>
                <span className="text-zinc-600">•</span>
                <span>created {product.createdAt}</span>
                <span className="text-zinc-600">•</span>
                <span>{product.inventory} in stock</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden text-sm font-semibold text-zinc-100 sm:block">
                {product.price}
              </div>
              <Badge status={product.status} />

              <div className="relative">
                <button
                  onClick={() => setMenu((s) => !s)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
                >
                  •••
                </button>

                {menu ? (
                  <div className="absolute right-0 top-11 w-44 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-xl">
                    <button
                      onClick={() => {
                        setMenu(false);
                        onToggleStatus();
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-white/5"
                    >
                      Toggle Status
                      <div className="text-xs text-zinc-500">
                        draft ↔ published
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        setMenu(false);
                        alert("wire this to your edit screen later");
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-white/5"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        setMenu(false);
                        onDelete();
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-white/5"
                    >
                      Delete
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div className="text-xs text-zinc-400">
              id: <span className="text-zinc-200">{product.id}</span>
            </div>
            <button
              onClick={() => alert("wire this to view product")}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs hover:bg-white/10"
            >
              open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle({
  label,
  hint,
  defaultOn,
}: {
  label: string;
  hint: string;
  defaultOn?: boolean;
}) {
  const [on, setOn] = useState(Boolean(defaultOn));

  return (
    <button
      type="button"
      onClick={() => setOn((s) => !s)}
      className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-zinc-950/40 p-3 text-left hover:bg-zinc-950/55"
    >
      <div>
        <div className="text-sm font-semibold capitalize">{label}</div>
        <div className="text-xs text-zinc-500">{hint}</div>
      </div>
      <div
        className={clsx(
          "relative mt-0.5 h-6 w-11 rounded-full border transition",
          on ? "border-white/10 bg-white/20" : "border-white/10 bg-white/5",
        )}
      >
        <div
          className={clsx(
            "absolute top-1 h-4 w-4 rounded-full bg-white transition",
            on ? "left-6" : "left-1",
          )}
        />
      </div>
    </button>
  );
}

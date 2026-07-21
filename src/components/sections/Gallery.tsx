const shots = [
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    alt: "Jardim urbano com vegetação densa",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
    alt: "Paisagem natural com névoa e montanhas",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    alt: "Trilha iluminada por luz solar na floresta",
    className: "",
  },
]

export function Gallery() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl text-3xl font-bold md:text-4xl">
          Um olhar sobre{" "}
          <span className="text-primary">nossas ações</span>
        </h2>
        <p className="mt-4 max-w-lg text-muted-foreground">
          Registros de mutirões, hortas e encontros que mostram a mudança
          acontecendo no chão.
        </p>

        <div className="mt-12 grid auto-rows-[180px] gap-4 md:grid-cols-3 md:auto-rows-[220px]">
          {shots.map((shot) => (
            <div
              key={shot.src}
              className={`overflow-hidden rounded-3xl ${shot.className}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

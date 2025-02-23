import Image from "next/image";
export default function Button({ text, link }) {
  return (
    <a href={link}>
      <button className="button">{text}</button>
    </a>
  );
}

export function Navbar() {
  const content = [
    {
      value: "Cast",
      sections: [
        {
          title: "Dexian",
          symbol: { src: "/SVG/Dex-Icon.svg", width: 25, height: 34 },
          links: ["Kellyn", "Kyrie", "Charloette", "Darius", "Orion"],
        },
        {
          title: "Valkirian",
          symbol: { src: "/SVG/Valkirian-Icon.svg", width: 27, height: 27 },
          links: ["Heathcliff", "Opal"],
        },
        {
          title: "Oacian",
          symbol: { src: "/SVG/Oacian-Icon.svg", width: 25, height: 38 },
          links: ["Alena", "Navir", "Mira"],
        },
        {
          title: "Sapyre",
          symbol: { src: "/SVG/Sapyre-Icon.svg", width: 34, height: 30 },
          links: ["Ingrid", "Sitron"],
        },
        {
          title: "Varsyllus",
          symbol: { src: "/SVG/Varsyllus-Icon.svg", width: 27, height: 27 },
          links: ["Brantus", "Willa"],
        },
      ],
    },
    // {
    //   value: "World",
    //   sections: [
    //     {
    //       title: "Dexian",
    //       symbol: "Dexian",
    //       links: ["1", "2", "3", "4"],
    //     },
    //     {
    //       title: "Smth",
    //       symbol: "Oacian",
    //       links: ["Smth", "other", "lol"],
    //     },
    //   ],
    // },
  ];

  return (
    <div className="navbar">
      <Image src="/SVG/AOE-Logo.svg" alt="AOE-Logo" width="517" height="45" />

      <span className="navbar-content">
        {content.map((e) => {
          return (
            <DropDownMenu sections={e.sections} value={e.value} key={e.value} />
          );
        })}
      </span>
    </div>
  );
}

function DropDownMenu({ sections, value }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">{value}</button>
      <div className="dropdown-content">
        {sections.map((e) => {
          return <DropMenuSection {...e} key={e.title} />;
        })}
      </div>
    </div>
  );
}

function DropMenuSection({ title, symbol, links }) {
  return (
    <div className="drop-menu-section">
      <Image
        src={symbol.src}
        alt={`${title}-icon`}
        width={symbol.width}
        height={symbol.height}
        style={{ margin: "4px", width: 16, height: 20 }}
      />
      <div className="drop-menu-items">
        {links.map((e) => {
          console.log(e);
          return (
            <a key={e} href={e}>
              {e}
            </a>
          );
        })}
      </div>
    </div>
  );
}

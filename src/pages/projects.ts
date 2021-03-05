interface ProjectItem {
  title: string;
  subtitle: string;
  route: string;
}

export interface ProjectCollectionItem {
  title: string;
  color: string;
  items: ProjectItem[];
}

export const projectsCollection: ProjectCollectionItem[] = [
  {
    title: 'UX/UI',
    color: 'green',
    items: [
      {
        route: '/ux-ui/trackway',
        title: 'Trackway',
        subtitle: 'UX/UI: Plataformas de trazabilidad de productos y servicios',
      },
      {
        route: '/ux-ui/davivienda',
        title: 'Davivienda',
        subtitle: 'UX/INNOVACIÓN: Plataforma VI, Digitalización y transformación de la información',
      },
      {
        route: '/ux-ui/docred',
        title: 'DocRed',
        subtitle: 'Red social para médicos hispanohablantes',
      },
    ],
  },
  {
    title: 'BRANDING',
    color: 'orange',
    items: [
      {
        route: '/branding/twins',
        title: 'Twins',
        subtitle: 'BRANDING Y PROPUESTA DE VALOR: Emprendimiento de postres saludables',
      },
      {
        route: '/branding/blooming',
        title: 'Blooming',
        subtitle: 'NAMING/BRANDING/PROPUESTA DE VALOR: Marca de ropa para mujer',
      },
      {
        route: '/branding/rem',
        title: 'Rem',
        subtitle: 'EMPRENDIMIENTO PROPIO: Agencia creativa',
      },
    ],
  },
  {
    title: 'ILUSTRACIÓN',
    color: 'yellow',
    items: [
      {
        route: '/illustration/dolls',
        title: 'Muñecas',
        subtitle: 'ILUSTRACIÓN VECTOR: Una cuarentena en mi cabeza',
      },
      {
        route: '/illustration/patrones',
        title: 'Patrones',
        subtitle: 'ILUSTRACIÓN Y PATTERN: Patrones infantiles ',
      },
      {
        route: '/illustration/leporelo',
        title: 'Leporelo',
        subtitle: 'PROYECTO EDITORIAL: Ilustraciones a lápiz',
      },
    ],
  },
  {
    title: 'ESPACIOS',
    color: 'blue',
    items: [
      {
        route: '/spaces/paloquemao',
        title: 'Paloquemao',
        subtitle: 'BECA CREATIVA: Desfile y transformación de espacios',
      },
      {
        route: '/spaces/orb',
        title: 'ORB',
        subtitle: 'DIRECCIÓN DE ARTE: Proyecto de circo y música',
      },
    ],
  },
];

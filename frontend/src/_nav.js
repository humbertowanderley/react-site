export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer',
      
    },
    {
      title: true,
      name: 'Monitoramento',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'PoP-PE',
      url: '/theme/colors',
      icon: 'icon-map',
    },
    {
      name: 'ICONE',
      url: '/redeicone',
      icon: 'icon-map',
    },
    {
      name: 'Repepe',
      url: '/theme/typography',
      icon: 'icon-map',
    },
    {
      title: true,
      name: 'Informações',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Clientes',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Cadastro',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Atualizações',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        
      ],
    },
    {
      name: 'Operadoras',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Sub-item1',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Sub-item2',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
      ],
    },
    
  ],
};

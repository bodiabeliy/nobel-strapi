import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    href: Schema.Attribute.String;
    isAuth: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    LinkText: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    href: Schema.Attribute.String;
    LogoImage: Schema.Attribute.Media<'images', true>;
    LogoText: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    NavLinks: Schema.Attribute.Component<'elements.links', true>;
    NavLogo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.links': ElementsLinks;
      'elements.logo': ElementsLogo;
      'layout.navbar': LayoutNavbar;
    }
  }
}

const baseUrl: string = 'admin/';

export interface InavbarDataChild {
  routerLink: string;
  icon: string;
  label: string;
}

export interface InavbarData {
  routerLink: string;
  icon: string;
  label: string;
  childs?: InavbarDataChild[];
}

export const navbarData: InavbarData[] = [
  {
    routerLink: 'users',
    icon: 'bi bi-view-list',
    label: 'Users',
  },
  {
    routerLink: 'agency',
    icon: 'bi bi-power',
    label: 'Agency',
  },
  {
    routerLink: baseUrl + 'keycloak',
    icon: 'bi bi-view-list',
    label: 'Keycloak',
    childs: [
      {
        routerLink: baseUrl + 'roles',
        icon: 'bi bi-power',
        label: 'Roles',
      },
    ],
  },
];

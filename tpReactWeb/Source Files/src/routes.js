import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Pedidos from "./views/Pedidos";
import AltaPedido from "./views/AltaPedido";
import Pedido from "./views/Pedido";
import AgregarItemEnPedido from "./views/AgregarItemEnPedido";
import Productos from "./views/Productos";
import AltaProducto from "./views/AltaProducto";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/pedidos",
    layout: DefaultLayout,
    component: Pedidos
  },
  {
    path: "/pedido/:numeroPedido",
    layout: DefaultLayout,
    component: Pedido
  },
  {
    path: "/nuevo-pedido",
    layout: DefaultLayout,
    component: AltaPedido
  },
  {
    path: "/agregar-item-en-pedido/:numeroPedido",
    layout: DefaultLayout,
    component: AgregarItemEnPedido
  },
  {
    path: "/productos",
    layout: DefaultLayout,
    component: Productos
  },
  {
    path: "/nuevo-producto",
    layout: DefaultLayout,
    component: AltaProducto
  },
];

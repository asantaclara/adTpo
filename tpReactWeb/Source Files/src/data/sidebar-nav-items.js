export default function() {
  return [
    {
      title: "Pedidos",
      htmlBefore: '<i class="material-icons">local_grocery_store</i>',
      to: "/pedidos",
    },
    {
      title: "Productos",
      htmlBefore: '<i class="material-icons">local_dining</i>',
      to: "/productos",
    },
    {
      title: "Login",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/login",
    },
  ];
}

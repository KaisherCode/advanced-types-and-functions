enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

type User = {
  username: string;
  role: ROLES;
}

const kaisherUser: User = {
  username: 'kaisherdev',
  role: ROLES.SELLER,
}

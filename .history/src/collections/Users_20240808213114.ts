import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    read: () =>true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      admin: {
        condition:({req}) => req
      },
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Users", value: "users" },
      ],
    },
  ],
};

"use client";

import { useState } from "react";
import { QueryClient } from "@tanstack/react-query";

const Providers = () => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(()=> trpcClient.createClient())
};

export default Providers;

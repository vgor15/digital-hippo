import { inferProcedureOutput } from '@trpc/server';
import { AppRouter } from './';

type PollOrderStatusOutput = inferProcedureOutput<AppRouter, 'payment', 'pollOrderStatus'>;

const { data } = trpc.payment.pollOrderStatus.useQuery(
  {
    where: {
      id: {
        equals: orderId,
      },
    } as PollOrderStatusOutput['where'],
  },
  {
    enabled: isPaid === false,
    refetchInterval: (data) =>
      data?.docs[0]?._isPaid ? false : 1000,
  }
)
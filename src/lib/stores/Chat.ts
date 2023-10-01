import { writable } from 'svelte/store';

export const ChatStore = writable<ChatMessage[]>([
  // { question: 'Lorem', answer: 'Ipsum', status: 'loaded' },
  // {
  //   question: 'Lorem ipsum, dolor sit amet?',
  //   answer: 'Lorem ipsum dolor sit amet, said the robot in crisp English.',
  //   status: 'loaded'
  // },
  // { question: 'Lorem', answer: 'Ipsum', status: 'loaded' }
]);

export type ChatMessage = {
  id: string;
  question: string;
  answer?: string;
  status: 'pending' | 'failed' | 'loaded';
};

export const sendMessage = (question: string) => {
  ChatStore.update((prev) => {
    prev.push({
      id: crypto.randomUUID(),
      question,
      status: 'pending'
    });

    return prev;
  });
};

export const saveAnswer = (question_id: string, answer: string) => {
  ChatStore.update((prev) => {
    const index = prev.findIndex((m) => m.id === question_id);

    if (index === -1) return prev;

    prev[index].answer = answer;
    prev[index].status = 'loaded';

    return prev;
  });
};

export const messageError = (question_id: string) => {
  ChatStore.update((prev) => {
    const index = prev.findIndex((m) => m.id === question_id);

    if (index === -1) return prev;

    prev[index].status = 'failed';

    return prev;
  });
};

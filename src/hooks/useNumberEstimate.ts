import useSWRMutation from 'swr/mutation';

export function useNumberEstimate() {
  async function sendRequest(url: string, { arg }: { arg: { image: Blob; model: string } }) {
    const formData = new FormData();
    formData.append('image', arg.image);

    return fetch(`${url}?model=${arg.model}`, {
      method: 'POST',
      body: formData,
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .catch((e) => {
        return { error: e.message };
      });
  }

  const { trigger, data, error, isMutating } = useSWRMutation('/api/ai/mnist', sendRequest);

  return { trigger, data, error, isMutating };
}

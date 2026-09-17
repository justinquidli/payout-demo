// Retry a lookup until the server reports completed.
export async function retry(fn, attempts = 8, delayMs = 3000) {
  for (let i = 0; i < attempts; i++) {
    const res = await fn();
    if (res.status === 'completed') return res;
    await new Promise((r) => setTimeout(r, delayMs));
  }
  throw new Error('still processing after retries');
}

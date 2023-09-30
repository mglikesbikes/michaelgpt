/**
 *  Helper to destroy questions/answers
 */

export const destroy = async (
  platform: App.Platform,
  content_id: string
): Promise<boolean> => {
  try {
    await platform.env.DATASET.delete(content_id);
    const destroyed = await platform.env.DATASET_VECTORS.deleteByIds([
      content_id
    ]);
    console.log('>> destroy() destroyed %d vectors', destroyed.count);

    return true;
  } catch (e) {
    console.log('>> destroy() caught:', e);
    return false;
  }
};

const spacesUrl =
  "https://uhodnac321.execute-api.ap-southeast-2.amazonaws.com/prod/";

export const config = {
  REGION: "ap-southeast-2",
  USER_POOL_ID: "ap-southeast-2_73bJJdXe8",
  APP_CLIENT_ID: "265b8m6i20jqkht38gavmq7658",
  IDENTITY_POOL_ID: "ap-southeast-2:2c776ed9-2a4a-404f-a235-84cf513b83f5",
  TEST_USER_NAME: "alisonkb",
  TEST_USER_PASSWORD: "7V&^8MoU",
  SPACES_PHOTOS_BUCKET: "spaces-photos-021db6abe2f4",
  api: {
    baseUrl: spacesUrl,
    spacesUrl: `${spacesUrl}spaces`,
  },
};

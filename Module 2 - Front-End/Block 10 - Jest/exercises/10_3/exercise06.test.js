const dogAPI = require('./exercise06');

test("testing promise requisition sucess", async () => {
  dogAPI.dogFetch = jest.fn()
    .mockResolvedValue("request sucess");

  dogAPI.dogFetch();
  expect(dogAPI.dogFetch).toHaveBeenCalled();
  expect(dogAPI.dogFetch).toHaveBeenCalledTimes(1);
  return expect(dogAPI.dogFetch()).resolves.toBe('request sucess');
});

test("testing promise requisition reject", async () => {
  dogAPI.dogFetch.mockRestore()
  dogAPI.dogFetch
    .mockRejectedValue("request failed");

  expect(dogAPI.dogFetch).toHaveBeenCalledTimes(0);
  return expect(dogAPI.dogFetch()).rejects.toBe('request failed');
});
import { Api } from "nocodb-sdk";
import { currentUser } from "@clerk/nextjs";

const api = new Api({
  baseURL: "https://nocodb.tavonni.com",
  headers: {
    "xc-token": process.env.NOCODB_TOKEN,
    "xc-auth": process.env.NOCODB_TOKEN,
  },
});

function getCompanions() {
  return api.dbViewRow
    .list("noco", "CelebPersonas", "Companions", "CompanionCsv", {
      offset: 0,
      where: "",
    })
    .then(function (companions) {
      return companions.list;
    })
    .catch(function (error) {
      console.error(error);
    });
}

function getCategories() {
  return api.dbViewRow
    .list("noco", "CelebPersonas", "Categories", "CategoryCsv", {
      offset: 0,
      where: "",
      fields: ["Id,name"],
    })
    .then(function (catys) {
      return catys.list;
    })
    .catch(function (error) {
      console.error(error);
    });
}
//TODO put back when adding the voice page
// function getAssistants(userId: string) {
//   return api.dbViewRow
//     .list("noco", "pxfm1r0dydv8c29", "mho11bafpm2iyyl", "vw5bgelpm0gk5pm3", {
//       offset: 0,
//       where: "(userId,eq," + userId + ")",
//     })
//     .then(function (assistants) {
//       const options = {
//         method: "GET",
//         headers: {
//           Authorization: "Bearer 0cdc051e-4a88-4745-870c-c78a8c829185",
//         },
//       };
//       fetch(
//         "https://api.vapi.ai/assistant/" + assistants.list[0].assistantId,
//         options
//       )
//         .then((response) => response.json())
//         .then((response) => {
//           // console.log("resssy", response);
//           return response;
//         })
//         .catch((err) => console.error(err));
//       // return assistants.list || {};
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

function getUserSubscription(userId: string) {
  return api.dbViewRow
    .list("noco", "pxfm1r0dydv8c29", "m7locaqms45qixf", "vw1aslyail8emtyo", {
      offset: 0,
      where: "(UserId,eq," + userId + ")",
    })
    .then(function (sub) {
      return sub.list[0] || {};
    })
    .catch(function (error) {
      console.error(error);
    });
}

function getUserApiLimit(userId: string) {
  return api.dbViewRow
    .list("noco", "pxfm1r0dydv8c29", "m15k3wkn70gxkzx", "vw3q8iv4hyqpntjp", {
      offset: 0,
      where: "(UserId,eq," + userId + ")",
    })
    .then(function (sub) {
      return sub.list[0] || {}, null;
    })
    .catch(function (error) {
      console.error(error);
    });
}

export {
  api,
  getCompanions,
  getCategories,
  getUserSubscription,
  getUserApiLimit,
};

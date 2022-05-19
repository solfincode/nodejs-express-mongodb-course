//Prisma
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//GET
exports.getBootcamps = (req, res, next) => {
  async function main() {
    await prisma.$connect();
    const data = prisma.class.findMany({});
    data
      .then((data) => res.json({ msg: "read all class list", data }))
      .catch((err) => console.log(err));
  }
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

//POST
exports.postBootcamps = (req, res, next) => {
  async function main() {
    await prisma.$connect();
    const data = prisma.class.create({
      data: {
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
      },
    });
    data
      .then((data) => res.json({ msg: "post new class", data }))
      .catch((err) => console.log(err));
  }
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

//PUT by updating title
//pass id via url params and update with req body parsed title
exports.putBootcamps = (req, res, next) => {
  async function main() {
    await prisma.$connect();
    const data = prisma.class.update({
      where: {
        id: req.params.id,
      },
      data: {
        title: req.body.title,
      },
    });
    data
      .then((data) => res.json({ msg: "update a class", data }))
      .catch((err) => console.log(err));
  }
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

//DELETE
exports.deleteBootcamps = (req, res, next) => {
  async function main() {
    await prisma.$connect();
    const data = prisma.class.delete({
      where: {
        id: req.params.id,
      },
    });
    data
      .then((data) => res.json({ msg: "delete a class", data }))
      .catch((err) => console.log(err));
  }
  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};

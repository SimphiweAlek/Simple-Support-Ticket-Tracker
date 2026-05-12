const express = require("express");
const router = express.Router();

const {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicketStatus,
    deleteTicket
} = require("../controllers/ticketsController");

router.get("/", getAllTickets);

router.get("/:id", getTicketById);

router.post("/", createTicket);

router.put("/:id", updateTicketStatus);

router.delete("/:id", deleteTicket);


module.exports = router;
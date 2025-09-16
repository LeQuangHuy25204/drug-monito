module.exports = function validateDrug(req, res, next) {
    const { name, dosage, card, pack, perDay } = req.body;

    // a. Name
    if (!name || name.length <= 5) {
        return res.status(400).json({ message: "Name must be longer than 5 characters" });
    }

    // b. Dosage format
    const dosageRegex = /^\d+-morning,\d+-afternoon,\d+-night$/;
    if (!dosageRegex.test(dosage)) {
        return res.status(400).json({ message: "Dosage must follow format: XX-morning,XX-afternoon,XX-night" });
    }

    // c. Card > 1000
    if (card <= 1000) {
        return res.status(400).json({ message: "Card must be greater than 1000" });
    }

    // d. Pack > 0
    if (pack <= 0) {
        return res.status(400).json({ message: "Pack must be greater than 0" });
    }

    // e. PerDay > 0 and < 90
    if (perDay <= 0 || perDay >= 90) {
        return res.status(400).json({ message: "PerDay must be between 1 and 89" });
    }

    next(); // nếu hợp lệ thì cho đi tiếp
};

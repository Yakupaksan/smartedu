exports.index = (req , res) => {
    res.status(200).render('index')
};

exports.about = (req , res) => {
    res.status(200).render('about')
};
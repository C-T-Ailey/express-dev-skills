let skills = [
    {skill: "HTML", proficiency: "decent"},
    {skill: "CSS", proficiency: "not great"},
    {skill: "JavaScript", proficiency: "getting better"},
    {skill: "Express", proficiency: " :'( "}
]


exports.skills_json = function(req, res){
    res.json({skills:skills});
};

exports.skills = function(req, res){
    res.render("../app/views/skills.ejs", {data: skills})
}


exports.new_get = function(req, res){
    res.render("../app/views/addSkill.ejs");
}

exports.new_post = function(req, res){
    console.log(req.body)
    skills.push({skill: req.body.skill, proficiency: req.body.proficiency});
    res.render("../app/views/skills.ejs", {data: skills});
}

exports.delete_skill = function(req, res){
    skills.splice(req.query.id, 1);
    console.log(req.query.id)
    res.render("../app/views/skills.ejs", {data: skills});
}

exports.update_get = function(req, res){
    console.log({data: skills[req.query.id]})
    res.render("../app/views/editSkill.ejs", {data: skills[req.query.id], id: req.query.id});
}

exports.update_post = function(req, res){
    skills.splice(req.body.id, 1, {skill: req.body.skill, proficiency: req.body.proficiency});
    res.render("../app/views/skills.ejs", {data: skills});
}

exports.skill_choice = function(req, res){
    res.json({data:skills[req.params.id]})
    
    //res.render("../app/views/skill.ejs", {data: skills})
}
/* app.get(‘/books/:id’, function(req, res) {
    res.json({data:books[req.params.id]})
})*/
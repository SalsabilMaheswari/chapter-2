const express = require('express')
const path = require("path");
const { title } = require('process');

const app = express()

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "./views"));

app.use("/public", express.static(path.join(__dirname, "./public")));

app.use(express.urlencoded({ extended: false}))

app.get('/', function (req, res) {
    res.send("Hello")
})

app.get('/home', function (req, res) {
    setHeader(res)
    res.render('home', {isLogin: isLogin})
})

app.get('/contact-me', function (req, res) {
    setHeader(res)
    res.render('contact')
})

app.get('/detail-card', function(req,res) {
    setHeader(res)
    res.render('detailcard1')
})

const port = 7000 
app.listen(port, function () {
    console.debug(`Server running on port ${port}`)
})

const isLogin = true

app.get('/home/:id', function (req,res) {
    const blogId = req.params.id
    setHeader(res)
    res.render('detailcard1', {
        blog: {
            id:blogId,
            title: 'Dumbways Mobile App',
            content1 : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            content2 : `Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.`,
            content3 : `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`,
            duration : '12 Jan 2021 - 11 Feb 2021',
            total_duration : '1 Month'
        }
    })
})

function setHeader(res) {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
}
# SA-Soft Questions
### _1. Can you explain the basics of the Laravel framework and how it differs from other PHP frameworks you've worked with?_

    There's a lot of these but I'll try to put them in bullet form to cover just a few of these.
     - Security. It's very easy to set up for protection for XSS attacks. 
     - It has a built in Authentication and Authorization system. Building this from scratch can get hairy very quickly.
     - It is highly scallable and can perform very well under heavy server loads.
     - It has a unique message queuing system.
     - PHPUnit is built in, meaning that one can easily test user behavior without waisting too much time.
     - Separated business logic and the interface
     - Comes with a standard CLI interface but a few frameworks come with this as well now. But it's highly intuitive as well
     - It has a vibrant community that and a ton of technologies that make the already powerful framework be evan meaner.

### _2. Can you give an example of a complex problem you've solved using Laravel and explain how you approached it?_
    The last time I used Laravel I was still building websites only. We had acquired a Thailand client and had to writea websitethat would take into account not only English but Thai as well. I had never done something like this before.

>It relied heavily on two things viz *Laravel Localization* as well as *trans()* method
>One had to create for example, these localization files for both English and Thai
`1. resources/lang/en/message.php`
`2. resources/lang/tha/message.php`
>Then one would have to create a controller for these and within the index of the localization controller, one of the parameters had to be the $locale

```php
public function index(Request $request,$locale) 
{ 
  app()->setLocale($locale);           
  return view('welcome');
}
```
>Then within your Router, one would have to do something like the following, specifying the locale

```php
Route::get('{locale}/index','LocalizationController@index');
```
There's a number of ways to display locale strings in Laravel, I remember my usage of it was the following
```php
1. trans()
2. @lang()
```
>At first I only knew the one and then I found out about the second one when I was more than halfway through. But it wasn't inconsistent to work like that

Here's an example of what one had to end up doing throughout the codebase

```resources/lang/en/message.php```
```php

return [
    'welcome' => 'This is a welcome message !',
];
```
```resources/lang/tha/message.php```
```php
return [
    'welcome' => '这是一个欢迎信息 !',
];
```
>In the end the client was happy, and the designers had done a magnificent job with the artwork so the project was delivered successfully.
>Lastly, here's an example of how the blade template view would look like on the server
```php
<div class="content" style="text-align: justify;">                
                <h1>Laravel 8 Localization - websolutionstuff.com</h1>
                <h2>The Message Display Using trans() : {{trans('message.welcome')}}</h2>
                <h2>The Message Display Using lang() : @lang('message.welcome')</h2>
                <h2>The Message Display Using __ : {{__('message.welcome')}}</h2><br>
                <h3>The Message Display Using json and it's useful in <p style="color: red;"> 
                   "toaster message" or "notification" and "required validation message" </p> 
                   @json(__('message.welcome'))</h3><br>
                <h2>Example of label and placeholder localization</h2>
                <label>@lang('message.label')</label>:
                <input class="form-control" placeholder="@lang('message.placeholder')" id="title" 
                  name="title" type="text" />
</div>
```
### _3. Have you worked with Laravel's ORM, Eloquent? Can you explain how it works and give an example of how you've used it in a project?_
    Laravel comes standard with Eloquent ORM. It makes interacting with databases much easier.
    One is able to make use of multiple databases by making use of the ORM by making use of the ActiveMethod architectural style
    One utelises the ORM whenever you're going to be making use of a relational database for your data.
    e.g. even for this project, I made use of Eloquent when interacting with the DB, even during the CRUD operations for the backend.
### _4. Have you used Laravel's Artisan command-line interface? Can you give an example of how you've used it to simplify tasks in a project?_
    The artisan CLI is one of the things that make Laravel so fantastic. It really simplifies a lot of things from spinning up servers, running migrations, database seeders etc.
    One of the main commands I run to simplify things for me is
    ```php
    // to mention a few
    php artisan db:seed
        or
    php artisan migrate
    ```
    This helps volumes for generating fake data for testing and possibly testing out things like pagination while developing etc.

### _5. Have you worked with Laravel's Blade templating engine? Can you explain how it works and give an example of how you've used it to create reusable templates in a project?_
    Blade is Laravels templating language. It has special syntax that one can use for writing views. 
    It has special syntax and conditionals to make it easy to pass data through variables from controllers to views and also makes it easy to protect them against XSS

```php
/**
 * Create the component instance.
 */
public function __construct(
    public string $type,
    public string $message,
) {}
```
```
// $message variable passed to the template below
<div class="alert alert-{{ $type }}">
    {{ $message }}
</div>
```

### _6. Have you implemented any caching or performance optimization strategies in a Laravel project? Can you explain your approach and how it improved the performance of the project?_
    One can speed up the performance a project a number of ways. I'll only cover a few over here. 
     - One can start off by caching the routes from time to time and run the following command
     ```php artisan route:cache```
>It's worthwile remembering that the cache gets cleared when a user leaves a website.
>It's also advisable to run this command after making structural changes as well.
>There are times when there's stale data being displayed, in such instances one should clear the cache by running
```php artisan cache:clear```

     - Optimise Composer, the tool used for third party packages. By running the following command, and adding the flags --no-dev --o, so that dev dependencies can be removed
     ```composer install --prefer-dist --no-dev -o```
>This also allows composer to create a directory for optimising the autoloader, and as a result, boosting performance all round.

     - By making use of *Queues* for tasks that don't require immediate execution and can be run by a process in the background later.
     - Depending on your queue driver, e.g. Redis, RabbitMQ etc. 
>Laravel has a built-in queue worker that can be executed using the following command
```php artisan queue:work```
Should you want to add a new job to the queue, you can do so as follows     
```Queue::push('SendEmail', array('message' => $message));```

     - Compressing images and using CDN's also play a huge role in improving the performance of a Laravel website.

I haven't written a website in Laravel that started under performing badly. That was in JavaScript and that's because I wasn't closing my services so the browser would continue utilising memory in the background while the person is no longer on it.

### _7. Have you integrated any third-party libraries or packages into a Laravel project? Can you explain your approach and how it contributed to the success of the project?_
    Plenty of times. In fact it's kind of hard not to leverage on third party tools. There's plenty of really well written 3rd party packages that have had hours and hours of research done on them by experts, compared to you "re-inventing the wheele". The last really nice little tool I built was making currency converter for a website. 
>I levaraged heavily on the "money" by running the following command.
```composer require moneyphp/money```
>This allowed me to be able to not have to worry about a lot of the headaches around currencies as well as roundoff errors that usually occur when dealing with floating numbers.
```php
use Money\Money;

$fiveEur = Money::EUR(500);
$tenEur = $fiveEur->add($fiveEur);

list($part1, $part2, $part3) = $tenEur->allocate([1, 1, 1]);
assert($part1->equals(Money::EUR(334)));
assert($part2->equals(Money::EUR(333)));
assert($part3->equals(Money::EUR(333)));
```
### _8. Can you give an example of a complex database schema you've designed for a Laravel project and explain how you optimized it for performance?_
    This is probably not the best answer for this question, but when I was writing Laravel applications, the level of data modelling within the company was really not as intense as the following years. I know a few ways for optimizing DB's in Laravel, to name a few.
     - By indexing data that is used more regularly. This will cost you an additional write, to the DB, but the value will be much more when it comes to the actual querrying of this data.
     - Using simplePaginate() instead of paginate() for 
     - Selecting only the data that you want instead of pulling the full data set and then filtering down from there.
     - Using chunking. e.g.
```php
// when using eloquent
$posts = Post::chunk(100, function($posts){
    foreach ($posts as $post){
     // Process posts
    }
});
```
    - Using plucking if you are interested in one or two columns within a database
```php
$posts = Post::pluck('title'); //When using eloquent
$posts = DB::table('posts')->pluck('title'); //When using query builder
foreach ($posts as  $title){
    // $title is the title of a post
}
```

### _9. Have you used Laravel's built-in authentication system? Can you explain how it works and give an example of how you've customized it for a project?_

    Laravel comes with two Authentication controllers out of the box, which is a huge blessing.
    The AuthController handles new user registration and "logging in", while the PasswordController contains the logic to help existing users reset their forgotten passwords. Each of these controllers uses a trait to include their necessary methods
### _10. Have you implemented any API integrations using Laravel? Can you explain your approach and any challenges you faced?_
    Yes.
    Many challenges depending on who you're integrating with and how thorough are they with their processes. 
    A lot of these would be things like not having images on the CDN especially for Numetro when it came to movies which have to revolve after a specific period of time.
    To having stale data appearing on the front end all because the lifetime of the caching system has been out.
    To simply not having the other side ready with their integration to the point whereby one ends up having to mock the responses that you're expecting in order to meet the deadlines from your end.


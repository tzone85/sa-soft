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
                   "toastr message" or "notification" and "required validation message" </p> 
                   @json(__('message.welcome'))</h3><br>
                <h2>Example of label and placeholder localization</h2>
                <label>@lang('message.label')</label>:
                <input class="form-control" placeholder="@lang('message.placeholder')" id="title" 
                  name="title" type="text" />
</div>
```
### _3. Have you worked with Laravel's ORM, Eloquent? Can you explain how it works and give an example of how you've used it in a project?_

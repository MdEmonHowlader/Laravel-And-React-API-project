<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Auth\Access\Gate;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Route;

class PostController extends Controller implements HasMiddleware
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Post::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields= $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        $post = $request->user()->posts()->create($fields);
        return  $post;
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return $post;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $this->authorize('modify', $post);
        $fields= $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        $post->update($fields);
        return  $post;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $this->authorize('modify', $post);
        $post->delete();
        return ['message' => 'Post deleted'];
    }
}

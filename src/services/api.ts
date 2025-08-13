const API_BASE_URL = 'http://localhost:8000/api/';

interface User {
    id: number;
    username: string;
    email: string;
}

interface Post {
    id: number;
    author: User;
    content: string;
    created_at: string;
    likes_count: number;
    comments_count: number;
}

interface Comment {
    id: number;
    author: User;
    post: number;
    content: string;
    created_at: string;
}

interface AuthResponse {
    token: string;
    user_id: number;
    username: string;
    email: string;
}

// --- Gerenciamento do Token de Autenticação ---
let authToken: string | null = localStorage.getItem('authToken');

export const setAuthToken = (token: string | null) => {
    authToken = token;
    if (token) {
        localStorage.setItem('authToken', token);
    } else {
        localStorage.removeItem('authToken');
    }
};

export const getAuthToken = () => authToken;

// --- Funções Genéricas para Requisições ---
const authenticatedFetch = async (endpoint: string, options: RequestInit = {}) => {
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string>),
    };

    if (authToken) {
        headers['Authorization'] = `Token ${authToken}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`Falha na requisição para ${endpoint}: ${response.statusText}`);
    }

    return await response.json();
};

// --- Funções de Autenticação ---
export const apiLogin = async (credentials: object): Promise<AuthResponse> => {
    const data = await authenticatedFetch('users/login/', {
        method: 'POST',
        body: JSON.stringify(credentials),
    });
    setAuthToken(data.token);
    return data;
};

export const register = async (userData: object): Promise<User> => {
    return await authenticatedFetch('users/register/', {
        method: 'POST',
        body: JSON.stringify(userData),
    });
};

// --- Funções para Posts ---
export const getPosts = async (): Promise<Post[]> => {
    return await authenticatedFetch('posts/');
};

export const getPostById = async (id: number): Promise<Post> => {
    return await authenticatedFetch(`posts/${id}/`);
};

export const createPost = async (content: string): Promise<Post> => {
    return await authenticatedFetch('posts/', {
        method: 'POST',
        body: JSON.stringify({ content }),
    });
};

export const deletePost = async (id: number): Promise<void> => {
    await authenticatedFetch(`posts/${id}/`, {
        method: 'DELETE',
    });
};

// --- Funções para Comentários ---
export const getCommentsForPost = async (postId: number): Promise<Comment[]> => {
    return await authenticatedFetch(`comments/?post=${postId}`);
};

export const createComment = async (postId: number, content: string): Promise<Comment> => {
    return await authenticatedFetch('comments/', {
        method: 'POST',
        body: JSON.stringify({ post: postId, content }),
    });
};

// --- Funções para Likes ---
export const likePost = async (postId: number): Promise<any> => {
    return await authenticatedFetch('likes/', {
        method: 'POST',
        body: JSON.stringify({ post: postId }),
    });
};

export const unlikePost = async (likeId: number): Promise<void> => {
    await authenticatedFetch(`likes/${likeId}/`, {
        method: 'DELETE',
    });
};

// --- Funções para Follows ---
export const followUser = async (userId: number): Promise<any> => {
    return await authenticatedFetch('follow/', {
        method: 'POST',
        body: JSON.stringify({ following: userId }),
    });
};

export const unfollowUser = async (followId: number): Promise<void> => {
    await authenticatedFetch(`follow/${followId}/`, {
        method: 'DELETE',
    });
};
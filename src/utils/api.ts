const API_BASE_URL = 'http://localhost:8002/api';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile_picture?: string;
  phone?: string;
  date_joined: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

class ApiClient {
  private getAuthHeader() {
    const token = localStorage.getItem('auth_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeader(),
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.message || 'An error occurred' };
      }

      return { data };
    } catch (error) {
      return { error: 'Network error. Please try again.' };
    }
  }

  // Auth endpoints
  async login(credentials: LoginData): Promise<ApiResponse<{ token: string; user: User }>> {
    return this.request('/auth/login/', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async signup(userData: SignupData): Promise<ApiResponse<{ token: string; user: User }>> {
    return this.request('/auth/signup/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async getProfile(): Promise<ApiResponse<User>> {
    return this.request('/auth/profile/');
  }

  async updateProfile(userData: Partial<User>): Promise<ApiResponse<User>> {
    return this.request('/auth/profile/', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async logout(): Promise<ApiResponse<{ message: string }>> {
    return this.request('/auth/logout/', {
      method: 'POST',
    });
  }

  // Password reset endpoints
  async sendPasswordResetOTP(email: string): Promise<ApiResponse<{ message: string }>> {
    return this.request('/auth/forgot-password/', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  async resetPassword(email: string, otp: string, newPassword: string): Promise<ApiResponse<{ message: string }>> {
    return this.request('/auth/reset-password/', {
      method: 'POST',
      body: JSON.stringify({ email, otp, new_password: newPassword }),
    });
  }

  // Booking endpoints
  async createBooking(bookingData: any): Promise<ApiResponse<any>> {
    return this.request('/bookings/', {
      method: 'POST',
      body: JSON.stringify(bookingData),
    });
  }

  async getBookings(): Promise<ApiResponse<any[]>> {
    return this.request('/bookings/');
  }

  async getBooking(id: number): Promise<ApiResponse<any>> {
    return this.request(`/bookings/${id}/`);
  }

  // Apartments endpoints
  async getApartments(): Promise<ApiResponse<any[]>> {
    return this.request('/apartments/');
  }

  async getApartment(id: number): Promise<ApiResponse<any>> {
    return this.request(`/apartments/${id}/`);
  }
}

export const apiClient = new ApiClient();

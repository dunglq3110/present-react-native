import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CatFact {
  fact: string;
  length: number;
}

interface CatBreed {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
}

// GET FACT
export const getFact = createAsyncThunk<CatFact, void, { rejectValue: string }>("cat/getFact", 
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await fetch("https://catfact.ninja/fact", {
        method: "GET",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data);
      }
      return fulfillWithValue(data);
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

// GET FACTSSSSSSSSSSSSSSSSSSS
export const getFacts = createAsyncThunk<CatFact[], void, { rejectValue: string }>("cat/getFacts", 
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await fetch("https://catfact.ninja/fact", {
        method: "GET",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data);
      }
      return fulfillWithValue(data.data);
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

// GET BREEDS
export const getBreeds = createAsyncThunk<CatBreed[], void, { rejectValue: string }>("cat/getBreeds", 
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await fetch("https://catfact.ninja/breeds", {
        method: "GET",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data);
      }
      return fulfillWithValue(data.data);
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

const catSlice = createSlice({
  name: "cat",
  initialState: {
    isLoading: false,
    facts: [] as CatFact[],
    breeds: [] as CatBreed[],
    error: "",
  },
  reducers: {
    clearFacts: (state) => {
      state.facts = [];
    },
    clearBreeds: (state) => {
      state.breeds = [];
    },
    clearError: (state) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder

    // GET FACT
    .addCase(getFact.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getFact.fulfilled, (state, action: PayloadAction<CatFact>) => {
      state.isLoading = false;
      state.facts.push(action.payload);
    })
    .addCase(getFact.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.error = action.payload || "An unknown error occurred";
    })

    // GET CAT FACTSSSSSSSSSSSSSSSSSSS
    .addCase(getFacts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getFacts.fulfilled, (state, action: PayloadAction<CatFact[]>) => {
      state.isLoading = false;
      state.facts = action.payload;
    })
    .addCase(getFacts.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.error = action.payload || "An unknown error occurred";
    })
    
    // GET CAT BREEDSSSSSSSSSSSSSSSSSSS
    .addCase(getBreeds.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getBreeds.fulfilled, (state, action: PayloadAction<CatBreed[]>) => {
      state.isLoading = false;
      state.breeds = action.payload;
    })
    .addCase(getBreeds.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.error = action.payload || "An unknown error occurred";
    });
  }
});

export const { clearFacts, clearBreeds, clearError } = catSlice.actions;
export const catReducer = catSlice.reducer;
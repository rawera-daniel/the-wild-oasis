import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const queryClint = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");

      queryClint.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}

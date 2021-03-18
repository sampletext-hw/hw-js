function transform_array(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = ~~array[i]; // force transform to ints
    }

    let src_sum = 0;
    let dst_sum = 0;

    for (let i = 0; i < array.length; i++) {
        src_sum += array[i];

        if (array[i] % 2 === 0) {
            array[i] += i;
        }
        else {
            array[i] -= i;
        }

        dst_sum += array[i];
    }

    return { array, src_sum, dst_sum };
}

function transorm_array_verbose(array) {
    let result = transform_array(array);

    console.log(`${result.array}\n${result.src_sum}\n${result.dst_sum}`);
}

transorm_array_verbose([5, 15, 23, 56, 35])
transorm_array_verbose([-5, 11, 3, 0, 2])
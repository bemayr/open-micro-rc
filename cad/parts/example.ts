export function ball(): CSG {
  // return CSG.cube({ size: 3, center: true })
  //   .subtract(CSG.sphere({ r: 2, center: true }))
  //   .union(
  //     CSG.sphere({ r: 1.3, center: true }).intersect(
  //       CSG.cube({ size: 2.1, center: true })
  //     )
  //   );

  return (
    union(
      difference(
        cube({ size: 3, center: true }),
        sphere({ r: 2, center: true })
      ),
      intersection(
        sphere({ r: 1.3, center: true }),
        cube({ size: 2.1, center: true })
      )
    )
      // .translate([0, 0, 1.5])
      .scale(3)
  );
}

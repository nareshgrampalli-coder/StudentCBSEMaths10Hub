---
layout: book
title: "Chapter 12: Surface Areas and Volumes"
permalink: /handbook/chapters/12-surface-areas-and-volumes/
book_section: "Chapters"
previous_title: "Chapter 11: Areas Related to Circles"
previous_url: /handbook/chapters/11-areas-related-to-circles/
next_title: "Chapter 13: Statistics"
next_url: /handbook/chapters/13-statistics/
---

## Chapter 12: Surface Areas and Volumes

### A. Chapter overview
Solid geometry measures exposed surfaces and capacity. For combined solids, count only the surfaces visible on the outside.

**Objectives:** recall formulas; convert units; handle combinations of two prescribed solids and practical contexts.

### B. Important concepts and explanations
- Curved/lateral surface area excludes circular or polygonal ends; total surface area includes exposed faces.
- When two solids are joined along a face, that joined face is internal and is not included in the outside surface area.
- Convert all lengths to one unit before calculating. Volume units are cubic.

#### Visual guide: joined solids

```text
          _________
        /           \
       /  hemisphere \
      (_______________)
      |               |
      |    cylinder   |  exposed curved surfaces
      |               |
      |_______________|
       joined circular face is internal
```

Count only the outside boundary. The circular face where the hemisphere and cylinder meet is hidden inside the solid.

### C. Formula and theorem sheet

#### Solid formulae
Here, $r$ is radius, $h$ is perpendicular height, and $a$ is cube edge length. In the cuboid row, $l,b,h$ are its three edge lengths; for a cone, $l$ is slant height.

| Solid | Curved / lateral surface area | Total surface area | Volume |
|---|---|---|---|
| Cube, side $a$ | — | $6a^2$ | $a^3$ |
| Cuboid, $l,b,h$ | — | $2(lb+bh+hl)$ | $lbh$ |
| Right circular cylinder | $2\pi rh$ | $2\pi r(h+r)$ | $\pi r^2h$ |
| Right circular cone | $\pi rl$ | $\pi r(l+r)$ | $\frac13\pi r^2h$ |
| Sphere | $4\pi r^2$ | $4\pi r^2$ | $\frac43\pi r^3$ |
| Hemisphere | $2\pi r^2$ | $3\pi r^2$ | $\frac23\pi r^3$ |

For a right circular cone, $l=\sqrt{r^2+h^2}$. For a combination, add only exposed surfaces; do not count joined faces.

### D. Solved board-style examples
**Example 1: Cylinder volume**

**Question:** Find the volume of a cylinder of radius 3 cm and height 10 cm.

**Concept used:** Cylinder volume.

**Solution:**
1. $V=\pi r^2h$.
2. $V=\pi(3)^2(10)=90\pi$ cm$^3$.

**Final answer:** **$90\pi$ cm$^3$.**

**Exam tip:** Use perpendicular height in volume.

**Example 2: Cone surface area**

**Question:** A cone has radius 5 cm and height 12 cm. Find its curved surface area.

**Concept used:** Pythagoras and cone CSA.

**Solution:**
1. Slant height $l=\sqrt{5^2+12^2}=13$ cm.
2. CSA $=\pi rl=\pi(5)(13)=65\pi$ cm$^2$.

**Final answer:** **$65\pi$ cm$^2$.**

**Exam tip:** Do not substitute vertical height for slant height in CSA.

**Example 3: Joined cylinder and hemisphere**

**Question:** A hemisphere of radius 3 cm is attached to one end of a cylinder of the same radius and height 8 cm. Find the exposed surface area.

**Concept used:** Exposed surfaces only.

**Solution:**
1. Exposed area is cylinder curved area plus hemisphere curved area plus the cylinder's other circular end.
2. Area $=2\pi(3)(8)+2\pi(3^2)+\pi(3^2)$.
3. This is $48\pi+18\pi+9\pi=75\pi$ cm$^2$.

**Final answer:** **$75\pi$ cm$^2$.**

**Exam tip:** The joined circular face is internal, so exclude it.

### E. Common examination mistakes
- Counting an internal joined face as exposed.
- Confusing cone height with slant height.
- Omitting the flat base of a hemisphere in total area.
- Mixing cm and m before calculation.
- Giving volume in square units or area in cubic units.

### F. Exam tips and problem-solving strategy
Sketch the solid and shade exposed surfaces. Write each component area separately, then add. For capacity, convert volume to the requested litre or millilitre unit after calculation.

### G. Quick revision summary
Use correct CSA/TSA/volume formula. Joined surfaces are not exposed. Check dimensions and units; area scales in square units, volume in cubic units.

### H. Chapter-end revision checklist
- [ ] I can distinguish CSA, TSA, and volume.
- [ ] I know the prescribed solid formulas.
- [ ] I can determine which surfaces are exposed.
- [ ] I can convert units before substituting.

### I. Practice questions
1. Find the volume of a sphere of radius 3 cm.
2. Find the total surface area of a hemisphere of radius 7 cm.
3. A cuboid measures $4\times3\times2$ cm. Find its volume.

**Answers / hints:** 1. $36\pi$ cm$^3$. 2. $462$ cm$^2$ using $\pi=22/7$. 3. 24 cm$^3$.
